FROM node:0.12

RUN mkdir /opt/nitro
COPY . /opt/nitro/
WORKDIR /opt/nitro/

# the overrides need to be copied to ./overrides before building this docker image.
# or mount a volume at the same mountpoint as NITRO_MODEL_OVERRIDES
ENV NITRO_MODEL_OVERRIDES="/opt/nitro/overrides"

# always listen to external interface when running in container
ENV NITRO_HOST="0.0.0.0"

# delete node_modules if they got copied
RUN rm -rf node_modules

RUN npm install

EXPOSE 3000
CMD ["node", "app.js"]
