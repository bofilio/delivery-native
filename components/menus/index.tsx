import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";


export function AdditionalDrawerContent(props:any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sign out"
          onPress={() => {}}
        />
      </DrawerContentScrollView>
    );
  }