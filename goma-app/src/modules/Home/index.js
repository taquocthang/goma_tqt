import { View, Text, Button } from 'react-native'
import React from 'react'
import config from '../../config'

const HomeContainer = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontFamily: config.fonts.Regular }}>HomeContainer</Text>
      <View>
        <Button
          title="Đăng Ký"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          title="Đặt dịch vụ"
          onPress={() => navigation.navigate('BookService')}
        />
        <Button
          title="Phương Thức Thanh Toán"
          onPress={() => navigation.navigate('PaymentMethod')}
        />
        <Button
          title="Chờ phân KTV"
          onPress={() => navigation.navigate('WaitingAssignTechnician')}
        />
        <Button
          title="Đặt dịch vụ thành công"
          onPress={() => navigation.navigate('ServiceBookedSuccessfully')}
        />
        <Button
          title="Đặt chi tiết dịch vụ"
          onPress={() => navigation.navigate('BookingServiceDetail')}
        />
      </View>
    </View>
  )
}

export default HomeContainer