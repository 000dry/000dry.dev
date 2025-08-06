FROM node:22-alpine

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN mkdir /app
COPY pnpm-lock.yaml /app/
WORKDIR /app
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://www.mydomain.com

RUN pnpm install
RUN pnpm run build
EXPOSE 4000
CMD ["pnpm", "run","start"]
