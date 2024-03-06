import { View, Button } from 'react-native';
import React from 'react';
import config from '../../config';

const HomeThang = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          title="Chi tiết dịch vụ chưa hoàn thành"
          onPress={() => navigation.navigate('ServiceBookingDetail')}
        />
        <Button
          title="Chi tiết đặt dịch vụ"
          onPress={() => navigation.navigate('ServiceBookingCheckout')}
        />
        <Button
          title="Chi tiết dịch vụ đã nhận"
          onPress={() => navigation.navigate('ServiceBookingReceived')}
        />
        <Button
          title="Chi tiết dịch vụ yêu cầu"
          onPress={() => navigation.navigate('ServiceDetailRequired')}
        />
        <Button
          title="Chi tiết đơn hàng"
          onPress={() => navigation.navigate('ServiceOrderDetail')}
        />
        <Button
          title="Đặt hàng"
          onPress={() => navigation.navigate('ServiceOrder')}
        />
        <Button
          title="Danh mục sản phẩm"
          onPress={() => navigation.navigate('ProductCategories')}
        />
        <Button
          title="Đánh giá sản phẩm"
          onPress={() => navigation.navigate('ProductReview')}
        />

      </View>
    </View>
  );
};

export default HomeThang;
