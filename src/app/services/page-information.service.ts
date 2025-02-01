import axios from 'axios';

class PageInformationService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Mock URL
    }

    public async fetchPageInformation(): Promise<any> {
        try {
            const response = await axios.get(this.apiUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching page information:', error);
            throw error;
        }
    }
}

export default PageInformationService;