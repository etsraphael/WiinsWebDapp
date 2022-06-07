import { Injectable } from '@angular/core';
import { Web3Response, Web3Storage } from 'web3.storage';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  client: Web3Storage = new Web3Storage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBGNTIyMzJkYzZhNWYyODhhMkNlNkU1YTZGNjRiOTZiQjAwM2FDQ2MiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTM3MDgzNzMxMzEsIm5hbWUiOiJ1cGxvYWQtZmlsZS1mcm9tLXdlYiJ9.2ydF6T0QFD3rLmvoVaOd7nFHEksn0kdbbRxx-26MdWs',
  });

  async sendFileToStorageWithProgress(payload: ISendFileToStorageWithProgress) {
    // show the root cid as soon as it's ready
    const onRootCidReady = (cid: string) => {
      console.log('uploading files with cid:', cid);
    };

    // when each chunk is stored, update the percentage complete and display
    let totalSize = 0;
    let uploaded = 0;

    for (const item of payload.files) {
      totalSize += item.size;
    }

    const onStoredChunk = (size: number) => {
      uploaded += size;
      const pct = (uploaded / totalSize) * 100;
      payload.progress(Math.round(pct));
    };

    return this.client.put(payload.files, { onRootCidReady, onStoredChunk });
  }

  async getFileFromStorage(cid: string): Promise<Web3Response | null> {
    const response = await this.client.get(cid);
    if (!response) {
      return null;
    } else {
      return response;
    }
  }
}

export interface ISendFileToStorageWithProgress {
  files: File[];
  progress: (event: number) => void;
}
