FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

CMD ["bun", "run", "${FILE:-src/index.ts}"]