type PropsType = {
  url?: string;
  serverPort?: number;
};

export class GetMusic {
  apiUrl: string;
  constructor({url, serverPort}: PropsType) {
    const apiUrl = url || `http://localhost:${serverPort}/album`;
    this.apiUrl = apiUrl;
  }

  getRequest = async () => {
    try {
      const response = await fetch(this.apiUrl);

      return (await response).json();
    } catch (error) {
      console.error(error);
    }
  };
}
