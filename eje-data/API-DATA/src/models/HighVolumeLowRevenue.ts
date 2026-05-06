import { Table, Column, DataType, Model, PrimaryKey} from "sequelize-typescript";
@Table({
    tableName:'gold_high_volume_low_revenue',
    timestamps:false,
})
class HighVolumeLowRevuene extends Model{
@PrimaryKey
@Column({
    type:DataType.STRING
})
declare product_type: string

@Column({
    type:DataType.INTEGER
})
declare total_quantity: number 

@Column({
    type:DataType.FLOAT
})
declare total_net_sales: number

@Column({
    type:DataType.FLOAT
})
declare avg_price_per_unit: number
}

export default  HighVolumeLowRevuene