FROM node:14.17.1-alpine AS common-builder
ENV NODE_ENV=development
WORKDIR /app
RUN npm install -g typescript@4.3.5
COPY libs/common/tsconfig.json .
COPY libs/common/package.json .
RUN npm install
ADD ./libs/common .
RUN npm run  build


FROM node:14.17.1-alpine AS main-builder
ENV NODE_ENV=development
WORKDIR /app
RUN npm install -g typescript@4.3.5
COPY microservices/hello/tsconfig.json .
COPY microservices/hello/package.json .
COPY --from=common-builder ./app/ ./common/
RUN npm install -S ./common
RUN npm install
COPY microservices/hello .
RUN npm run build
RUN ls -la

FROM node:14.17.1-alpine AS final
ENV NODE_ENV=production
WORKDIR /app
COPY --from=main-builder ./app/package.json .
COPY --from=common-builder ./app/ ./common/
COPY --from=main-builder ./app/dist/ ./dist/
RUN npm install -S ./common
RUN npm install --production
EXPOSE 3000
EXPOSE 9229
ENV START_CMD start
CMD npm run $START_CMD
