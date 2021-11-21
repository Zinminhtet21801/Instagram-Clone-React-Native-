import React, { useState } from "react";
import { View, Text, Image, TextInput, Button } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";
import validUrl from "valid-url"
const PLACEHOLDER_IMAGE =
  "https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg";
const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A Url is required."),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
        touched,
        setFieldTouched
      }) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMAGE }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{flex : 1, marginLeft : 12}}>
              <TextInput
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                style={{ color: "white", fontSize: 20 }}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            style={{ color: "white", fontSize: 18 }}
            onChangeText={handleChange("imageUrl")}
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            onFocus={setFieldTouched}
          />
          {touched["imageUrl"] && errors.imageUrl && (
              <Text style={{fontSize : 12, color : "red"}}>{errors.imageUrl}</Text>
          )}

          <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
