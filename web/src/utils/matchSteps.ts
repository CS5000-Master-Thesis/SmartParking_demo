import { matchPath } from 'react-router';

interface MatchResult {
    page: string | undefined;
    companyId: string | undefined;
    theme: string | undefined;
}

interface Match {
    params: MatchResult | null | undefined;
}

const matchSteps = (path: string): MatchResult | null | undefined => {
    const match: Match | null = matchPath({
        path: '/:lng?/:theme/:page/:companyId?',
        end: true
    }, path);
    return match?.params;
};

export default matchSteps;
