import { useEffect, useState } from "react";
import EmbeddedPdfViewer from "./EmbeddedPdfViewer";
import { request } from "../constants/api";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
const PdfViewer = ({ docId, fileCover, fileUrl, title }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <img
            className="aspect-4/5 w-full rounded-md object-cover"
            src={`https://deploy-backend-production-f9c1.up.railway.app/api/v1/files/preview-file?fileName=${fileCover}`}
            alt={fileCover}
          />
        </DialogTrigger>
        <DialogContent className="w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[80vw]">
          <DialogHeader>
            {/* <DialogTitle>{title}</DialogTitle> */}
            <p className=" font-battambang tracking-wide">{title}</p>
            {/* <PdfViewer /> */}
          </DialogHeader>
          <EmbeddedPdfViewer
            key={docId}
            fileUrl={`http://192.168.137.174:9000/lawfirm-bucket/${fileUrl}`}
            title={title}
          />
          {/* Hello */}

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PdfViewer;
