export const envConfig = () => {
    return {
        apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    }
}