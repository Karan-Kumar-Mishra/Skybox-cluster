import bodyParser from "body-parser";

function bodyParserJson(req, res, next) {
  bodyParser.json();
  next();
}
export default bodyParserJson;