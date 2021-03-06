import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props{

    product:Product;

}
export default function ProductCard({product}:Props){

    return(  
    
    // <ListItem key={product.id}>
    //     <ListItemAvatar>
    //         <Avatar src={product.pictureUrl}/>

    //        <ListItemText>
    //            {product.name}- {product.price}
    //        </ListItemText>
    //     </ListItemAvatar>
    // </ListItem>

    <Card sx={{ maxWidth: 220 }}>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor:'secondary6.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
              sx:{fontWeight:'bold', color:'primary.main' }
            }}
        />

    <CardMedia
      sx={{height:190, backgroundSize:'contain', bgcolor:'primary.light'}}
      component="img"
      image={product.pictureUrl}
      title={product.name}
    />
    <CardContent>
      <Typography gutterBottom color='secondary' variant="h5">
        $ {(product.price/100).toFixed(2)}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.brand}/ {product.type}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to Cart</Button>
      <Button size="small">View</Button>
    </CardActions>
  </Card>
    )
}