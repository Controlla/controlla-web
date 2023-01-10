export default class Iubenda {
  baseUrl = "https://www.iubenda.com/api";

  constructor(cookieKey) {
    this.cookieKey = cookieKey;
  }

  async cookiePolicy() {
    const url = `${this.baseUrl}/privacy-policy/${this.cookieKey}`;
    const response = await fetch(url);
    return response.ok === true
      ? response.content
      : "<h1>Policy Not Found</h1>";
  }
}
