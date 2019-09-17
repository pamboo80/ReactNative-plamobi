# 1. Create a react-native boilerplateProject
C:\> react-native init boilerplateProject

# 2. Copy all files from the newly created boilerplateProject folder to plamobi
C:\> xcopy boilerplateProject plamobi /y /s

# 3. Build and install android app to the device
C:\plamobi> react-native run-android

# 4. Push source to the git
C:\plamobi> git add -A
C:\plamobi> git commit -m "Added the boilerplate project modules."
C:\plamobi> git push

# 5. Pull the source code in different machine and start modifying the project
C:\> git clone https://pamboo80@bitbucket.org/pamboo80/plamobi.git

# 6. Install packages to start working on the new machine
C:\plamobi> npm install

# 7. Build and install android app to the device (from the new development machine)
C:\plamobi> react-native run-android [either you can create your android keygen using 
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
OR use the newly pushed file - android\app\debug.keystore ]

# 8. App name changed for Android. (Commited)

# 9. npm add package for map
C:\plamobi> npm install react-native-maps --save

# 10. npm add package for map clustering 
C:\plamobi> npm install react-native-map-clustering --save

# 11. Added custom map clustering component from (https://github.com/venits/react-native-map-clustering)

# 12. Add npm packages for mutiple screens/views navigations
C:\plamobi> npm install react-navigation --save
C:\plamobi> npm install react-native-gesture-handler --save

# 13. Added bugsnag module to track crashing
C:\plamobi> npm install bugsnag-react-native --save

# 14. Add npm packages for native form elements
C:\plamobi> npm install react-native-elements --save
C:\plamobi> npm install react-native-vector-icons --save

# 15. Added missing dependencies packages
C:\plamobi> npm install typescript --save 
C:\plamobi> npm install typescript-eslint --save 
C:\plamobi> npm install eslint@5.0.0 --save 
C:\plamobi> npm install eslint-plugin-react --save 
C:\plamobi> npm install eslint-plugin-react-native --save 

# 16. Add geolocation 
C:\plamobi> npm install react-native-geolocation-service --save

# 17. Navigation bar updates like plamobi Adbobe XD design
C:\plamobi> npm install react-native-multibar --save
C:\plamobi> npm install babel-preset-react-native --save
C:\plamobi> npm install react-native-overflow-view --save
C:\plamobi> npm install react-native-quick-actions --save    

# 18. Add side menu with RN navigation, Toolbar and Drawer component + Redux
C:\plamobi> npm install redux --save 
C:\plamobi> npm install react-redux --save 


To Run:
npm install
react-native run-andoid
