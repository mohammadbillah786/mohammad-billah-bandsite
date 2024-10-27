const apiKey = 'c675e162-2306-4d65-afab-ebd9c6ed3dc8';

export default class BandSiteApi {
    constructor() {
        this.apiUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
        this.apiKey = apiKey;
    }

    withApiKey(endpoint) {
        return `${this.apiUrl}${endpoint}?api_key=${this.apiKey}`;
    }

    async postComment(comment) {
        try {
            const response = await axios.post(this.withApiKey('/comments'), comment, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(this.withApiKey('/comments'));
            const sortedComments = response.data.sort((a, b) => b.timestamp - a.timestamp);
            return sortedComments;
        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }

    async getShows() {
        try {
            const response = await axios.get(this.withApiKey('/showdates'));
            return response.data;
        } catch (error) {
            console.error('Error fetching shows:', error);
            throw error;
        }
    }
}

async function displayComments() {
    const comments = await bandSiteApi.getComments();
}

async function addComment() {
    const comment = {
        name: 'Jane Doe',
        comment: 'Amazing band!'
    };
    const newComment = await bandSiteApi.postComment(comment);
}

async function displayShows() {
    const shows = await bandSiteApi.getShows();
}

