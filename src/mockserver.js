import { createServer } from "miragejs";

function mockServer() {
    let server = createServer(
        {
            routes() {
                this.urlPrefix = "http://www.testdomain.com";
                this.namespace = "/v1/api";
                this.timing = 2000;

                this.get(
                    "/books",
                    () => {
                        return [
                            {
                                title: "Harry Potter and the Philosopher's stone",
                                author: "J.K Rowling",
                                year: 1997
                            },
                            {
                                title: "Eragon",
                                author: "Christopher Paolini",
                                year: 2002
                            },
                            {
                                title: "Eldest",
                                author: "Christopher Paolini",
                                year: 2005
                            }
                        ]
                    }
                )
            }
        }
    );

    return server
}

export default mockServer;