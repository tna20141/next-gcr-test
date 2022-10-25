export default async function getEnv(req, res) {
  const varr = process.env[req.query.env];
  if (!varr) {
    return res.status(404).send();
  }
  return res.status(200).send(varr.slice(0, 2) + ' ' + varr.slice(-2));
}
