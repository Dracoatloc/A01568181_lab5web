import "./index.css";
import {
  Grid,
  Paper,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

/**
 * Product Info elements
 * @returns ProductInfo UI elements
 */
const ProductInfo = () => {
  return (
    <div className="productInfo">
      <Grid container className="productGrid" spacing={2}>
        <Grid item lg={4}>
          <Paper className="largeImage">
            <img
              src="https://dummyimage.com/400x400/000/0011ff"
              alt="Levi's 501 Original Fit Jeans Jeans para Hombre"
            />
          </Paper>
        </Grid>

        <Grid item lg={8} container>
          <Grid item lg={12}>
            <Typography className="productName" variant="h1">
              Levi's 501 Original Fit Jeans Jeans para Hombre
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <Typography>
              100% algodón, Cierre de Cremallera, Lavar a máquina, Jeans corte
              ajustado, Pierna ajustada, Stretch especial que te brinda mayor
              movilidad
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars crossedout">1027.24</Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography className="dollars">706.93</Typography>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={2}>
            <InputLabel id="color-label" className="productLabel">Color</InputLabel>
            <Select labelId="color-label" id="color-select" label="Color">
              <MenuItem value="BLK">Black</MenuItem>
              <MenuItem value="BLU">Blue</MenuItem>
              <MenuItem value="BWN">Brown</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={2}>
            <InputLabel id="size-label" className="productLabel">Size</InputLabel>
            <Select labelId="size-label" id="size-select" label="Size">
              <MenuItem value="30X32">30x32</MenuItem>
              <MenuItem value="33X30">33x30</MenuItem>
              <MenuItem value="32X32">32x32</MenuItem>
              <MenuItem value="34X32">34x32</MenuItem>
              <MenuItem value="36X34">36x34</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={8} />
          <Grid item lg={2}>
            <InputLabel id="quantity-label" className="productLabel">Quantity</InputLabel>
            <Select
              labelId="quantity-label"
              id="quantity-select"
              label="Quantity"
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={10} />

          <Grid item lg={4}>
            <Button variant="contained" className="cartButton">Add to Cart</Button>
          </Grid>

          <Grid item lg={12} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductInfo;

