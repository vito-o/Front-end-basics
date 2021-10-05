import type { AxiosInstance } from "axios";
import { CreateAxiosOptions } from "./axiosTransform";

import axios from 'axios';
import { AxiosCanceler } from './axiosCanceler'

export class VAxios {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options)
    this.setupInterceptors();
  }


  private getTransform() {
    const { transform } = this.options;
    return transform;
  }

  private setupInterceptors() {
    const transform = this.getTransform();
    if(!transform) {
      return;
    }

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform;

    const axiosCanceler = new AxiosCanceler();

  }


}