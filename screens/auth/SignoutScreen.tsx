import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react'
import { useFireBaseAuth } from '../../hooks';
import { RootDrawerParamList } from '../types';


type Props = DrawerScreenProps<RootDrawerParamList, 'Signout'>;


export const SignoutScreen = ({ route, navigation }: Props) => {
     /**Authentication */
     const { state, performAction } = useFireBaseAuth();
   
     useEffect(() => {
        console.log(state)
        performAction('signout').then(
            
            ).catch() 

        state.uid ? "didint signout "  : navigation.navigate('Home');
               
     }, [state])
    return (
        <></>
    )
}
