"use client";
import { IKImage } from 'imagekitio-next';
import React from 'react'

type ImageTypes = {
path: string;
w?: number;
h?: number;
alt: string;
className?: string;
tr?:boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Image = ({path, h, w, alt, tr, className}: ImageTypes) => {

    return (
    <div><IKImage urlEndpoint={urlEndpoint} 
   {...(tr ? {transformation: [{ width: `${w}`, height: `${h}` }]} : {width: w, height: h})} path={path} width={w} height={h} alt={alt} className={className}/></div>
  )
}

export default Image