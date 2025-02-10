import bodyParser from "body-parser";
function bodyParserUrlencoded(req, res, next) {
  bodyParser.urlencoded({ extended: false })
  next();
}
export default bodyParserUrlencoded;