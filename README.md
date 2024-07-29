# SmartParking Demo

## Initial Setup for running the example

### 1. Build IOTA Identity GRPC image & Impierce SSI-agent

```shell
# Init submodule
git submodule update --init

# Enter directory
cd identity.rs

# Update to commit
git checkout 02e646243e88362b825428aef2ef207fcb7a3216
# Old -> 6f874df

# Build image
docker build -f bindings/grpc/Dockerfile -t iotaleger/identity-grpc .

# Navigate to ssi-agent -> agent_application
cd ../ssi-agent

# Update to commit
git checkout 87c3e11ef8c56b52ba4ae0bdda293c366f43782a

# Navigate to
cd agent_application

# Build image
docker build -f docker/Dockerfile -t ssi-agent ..
```

### 2. Create identities + env file

```shell
# Enter directory
cd tooling

# Run program
cargo run --release -- smartparking.org oem ta psp plo


cargo run --release -- https://hopelessly-optimal-seal.ngrok-free.app oem ta psp plo


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

# NGROK

```shell
ngrok http 80 --request-header-add "ngrok-skip-browser-warning"


ngrok http 3000 --request-header-add "ngrok-skip-browser-warning: 1"

ngrok http --domain=hopelessly-optimal-seal.ngrok-free.app 3000
```
