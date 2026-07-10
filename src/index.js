// qstash-api · HTTP API · MIT · AI-Native Solutions
import http from 'node:http';
http.createServer((_, res) => res.end(JSON.stringify({ ok: true, tool: 'qstash-api' }))).listen(process.env.PORT || 3000);
