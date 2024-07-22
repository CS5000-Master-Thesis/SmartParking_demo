# SmartParking Demo

## Initial Setup for running the example

### 1. Build IOTA Identity GRPC image

```shell
# Init submodule
git submodule update --init

# Enter directory
cd identity.rs

# Update to commit
git checkout 6f874df

# Build image
docker build -f bindings/grpc/Dockerfile -t iotaleger/identity-grpc .
```

### 2. Create identities + env file

```shell
# Enter directory
cd tooling

# Run program
cargo run --release -- smartparking.org oem ta psp plo
```

### 3. Start container

```shell
# Build images and start container (only need to have the --build the first time)
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

# Start container
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d

# Stop container
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down
```

### 4. Open demo site

- http://localhost:3000/


#### Update hosts file 

Add these to hosts file 'C:\Windows\System32\drivers\etc\hosts'
```shell
127.0.0.1   selv.local
# 127.0.0.1   bank.selv.local
# 127.0.0.1   government.selv.local
# 127.0.0.1   insurance.selv.local
```