export default function handler(req: any, res: any) {
  res.status(200).json({ ok: true, route: "/api/ping", now: new Date().toISOString() });
}
