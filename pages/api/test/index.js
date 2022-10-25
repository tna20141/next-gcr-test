export default async function test(req, res) {
  return res.status(200).send('testing ' + Date.now());
}
