async function getPosts() {
    
    const url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log("Algo no ha salido bien!", error);
    }
}
