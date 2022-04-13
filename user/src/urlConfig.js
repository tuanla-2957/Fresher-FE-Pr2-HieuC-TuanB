const baseUrl = "https://nhom-xanh-1.herokuapp.com";
export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
};
