# Milisearch

## docker instalation

```sh
docker pull getmeili/meilisearch:v1.14
```

```sh
docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.14
```

## Configure Meilisearch

Meilisearch accepts a number of instance options during launch. You can configure these in two ways: environment variables and CLI arguments. Note that some options are only available as CLI arguments—consult our configuration reference for more details.
Passing instance options with environment variables

To pass environment variables to Docker, add the -e argument to docker run. The example below launches Meilisearch with a master key:

```sh

docker run -it --rm \
  -p 7700:7700 \
  -e MEILI_MASTER_KEY='MASTER_KEY'\
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.14
```

## Passing instance options with CLI arguments

If you want to pass command-line arguments to Meilisearch with Docker, you must add a line to the end of your docker run command explicitly launching the meilisearch binary:

```sh

docker run -it --rm \
  -p 7700:7700 \
  -v $(pwd)/meili_data:/meili_data \
  getmeili/meilisearch:v1.14 \
  meilisearch --master-key="MASTER_KEY"
```
