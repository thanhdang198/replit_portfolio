import { CV_DOWNLOAD_URL } from "./constants";

export async function downloadCV(language: string = 'en'): Promise<void> {
  try {
    const url = language.toLowerCase() === 'vi' ? CV_DOWNLOAD_URL.VI : CV_DOWNLOAD_URL.EN;
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `Thanh_Doan_CV_${language.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading CV:', error);
    throw new Error('Failed to download CV');
  }
}
