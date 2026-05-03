import {
  Table,
  Column,
  DataType,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import Products_type from "./Products";
@Table({
  tableName: "sales",
  timestamps:false
})
class Sales extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  declare sale_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare net_quantity: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare gross_sales: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare discounts: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare returns: number;

  @Column({
    type: DataType.FLOAT,
  })
  declare total_net_sales: number;

  @ForeignKey(() => Products_type)
  declare product_id:number

  @BelongsTo(()=> Products_type)
  declare prodcuts_type:Products_type
}

export default Sales;
