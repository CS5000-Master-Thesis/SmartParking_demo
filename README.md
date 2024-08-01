# SmartParking Demo

## Initial Setup for running the example

### 1. Build IOTA Identity GRPC image & Impierce SSI-agent

```shell
# Init submodule
git submodule deinit -f .
git submodule update --init --recursive --checkout

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
git checkout 4a8c787f388bb2cd8a3538e62f9de7efb95d1eb0

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
cargo run --release -- https://impierce.smartparking.live oem ta psp plo

# Example
cargo run --release -- https://hopelessly-optimal-seal.ngrok-free.app oem ta psp plo


```

### 3. Start container

```shell
# Build images and start container (only need to have the --build the first time)
docker-compose up -d --build

# Start container
docker-compose up -d

# Stop container
docker-compose down
```

### 4. Open demo site

- http://localhost:3000/


# NGROK
You can use ngrok to create a tunnel to your localhost:3000.

```shell
# Dynamic domain
ngrok http 3000 --request-header-add "ngrok-skip-browser-warning: 1"

# If you have a static domain 
ngrok http --domain=hopelessly-optimal-seal.ngrok-free.app 3000
```
