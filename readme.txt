# 1. Create a react-native boilerplateProject
C:\> react-native init boilerplateProject

# 2. Copy all files from the newly created boilerplateProject folder to react-native-maps-demo
C:\> xcopy boilerplateProject react-native-maps-demo /y /s

# 3. Build and install android app to the device
C:\react-native-maps-demo> react-native run-android

# 4. Push source to the git
C:\react-native-maps-demo> git add -A
C:\react-native-maps-demo> git commit -m "Added the boilerplate project modules."
C:\react-native-maps-demo> git push

# 5. Pull the source code in different machine and start modifying the project
C:\> git clone https://pamboo80@bitbucket.org/pamboo80/react-native-maps-demo.git

# 6. Install packages to start working on the new machine
C:\react-native-maps-demo> npm install

# 7. Build and install android app to the device (from the new development machine)
C:\react-native-maps-demo> react-native run-android [either you can create your android keygen using 
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
OR use the newly pushed file - android\app\debug.keystore ]

# 8. App name changed for Android. (Commited)

# 9. npm add package for map
C:\react-native-maps-demo> npm install react-native-maps --save

# 10. npm add package for map clustering 
C:\react-native-maps-demo> npm install react-native-map-clustering --save

# 11. Added custom map clustering component from (https://github.com/venits/react-native-map-clustering)

# 12. Add npm packages for mutiple screens/views navigations
C:\react-native-maps-demo> npm install react-navigation --save
C:\react-native-maps-demo> npm install react-native-gesture-handler --save

# 13. Added bugsnag module to track crashing
C:\react-native-maps-demo> npm install bugsnag-react-native --save