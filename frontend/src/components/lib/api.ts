import {AlertItem, FileItem } from "../types/types";


export async function fetchFiles(): Promise<FileItem[]> {
    const response = await fetch(`http://localhost:8000/files`, { cache: "no-store" });
    if (!response.ok) throw new Error("Не удалось загрузить данные");
    return response.json() as Promise<FileItem[]>;
}

export async function fetchAlerts(): Promise<AlertItem[]> {
    const response = await fetch(`http://localhost:8000/alerts`, { cache: "no-store" });
    if (!response.ok) throw new Error("Не удалось загрузить данные");
    return response.json() as Promise<AlertItem[]>;
}

export async function uploadFile(title: string, file: File): Promise<void> {
    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("file", file);

    const response = await fetch(`http://localhost:8000/files`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Не удалось загрузить файл");
    }
}