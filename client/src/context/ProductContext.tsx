import { createContext } from 'react'
import { Category } from '../types'

export interface IProductContext {
    loading?: boolean,
    categories?: Category[],
    searchQuery?: string
}

export const ProductContext = createContext<IProductContext>({})


