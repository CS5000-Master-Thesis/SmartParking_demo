import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { SIOPV2RequestConfig } from './siopv2';
import { OID4VPRequestConfig } from './oid4vp';
import { OfferConfig } from './oid4vci';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface Vc {
  type: string[];
}

@Injectable()
export class OID4VCImpierceService {
  private readonly logger = new Logger(OID4VCImpierceService.name);

  constructor(private readonly httpService: HttpService) {}

  async createSIOPInvite(request: SIOPV2RequestConfig): Promise<string> {
    const response = await firstValueFrom(
      this.httpService
        .post<string>(
          'http://oid4vc-impierce:3033/v0/authorization_requests',
          {
            nonce: 'test', // TODO: remove or replace with proper nonce
            state: request.state,
          },
          {
            responseType: 'formdata',
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error("111 /v0/authorization_requests");
            this.logger.error(error);
            throw error.message;
          }),
        ),
    );
    return response.data;
  }

  async createOID4VPInvite(request: OID4VPRequestConfig): Promise<string> {
    const response = await firstValueFrom(
      this.httpService
        .post<string>(
          'http://oid4vc-impierce:3033/v0/authorization_requests',
          {
            nonce: 'test', // TODO: remove or replace with proper nonce
            state: request.state,
            presentation_definition: request.presentationDefinition,
          },
          {
            responseType: 'formdata',
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error("222 /v0/authorization_requests");
            this.logger.error(error);
            throw error.message;
          }),
        ),
    );
    return response.data;
  }

  async createOID4VCIInvite(request: OfferConfig): Promise<string> {
    const response = await firstValueFrom(
      this.httpService
        .post<string>(
          'http://oid4vc-impierce:3033/v0/offers',
          {
            offerId: request.state,
            credentialTypes: request.credentials,
          },
          {
            responseType: 'formdata',
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error("3333 /v0/offers");
            this.logger.error(error);
            throw error.message;
          }),
        ),
    );
    return response.data;
  }

  async submitSignedCredential(
    offer_id: string,
    credential: string,
  ): Promise<string> {
    const parsedCredential = jwtDecode<JwtPayload & { vc: Vc }>(credential);
    this.logger.debug('7777 Creential', parsedCredential);

    const dsa = {
      offerId: offer_id,
      credential: credential,
      credentialConfigurationId: parsedCredential.vc.type.at(-1) as string,
      // credentialConfigurationId: 'w3c_vc_credential', // must match oid4vc/impierce/issuance_config.yml
      isSigned: true,
    }

    this.logger.debug('666 Creential', dsa);

    try {
      const response = await firstValueFrom(
        this.httpService
          .post<string>('http://oid4vc-impierce:3033/v0/credentials', dsa)
          .pipe(
            catchError((error: AxiosError) => {
              this.logger.error("444 /v0/credentials");
              this.logger.error(error);
              throw error.message; 
            }),
          ),
      );
      return response.data;
    } catch(err) {
      this.logger.error('ssi-agent has a bug when sending a signed credential', err);
      return '';
    }
  }
}
