export interface Product {
  id: string;                        
  title: string;                    
  name: string;                      
  smallCardImage: string;            
  smallCardHoverImage: string;       
  soldOut?: boolean;                 
  discountPercent?: number | null;   
  isNewProduct?: boolean;            
  newPrice: number;                 
  oldPrice?: number | null;          
  collectionName?: string;           
  detailImages?: string[];           
  reviews?: number;                  
  sold?: number;                    
  availability?: string;             
  color?: string;                    
  material?: string;                 
  size?: string;                     
  tags?: string[];                   
}
