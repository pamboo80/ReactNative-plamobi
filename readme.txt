# 1. Create a react-native boilerplateProject
C:\> react-native init boilerplateProject

# 2. Copy all files from the newly created boilerplateProject folder to react-native-maps-demo
C:\> xcopy boilerplateProject react-native-maps-demo /y /s

# 3. Build and install android app to the device
C:\react-native-maps-demo> react-native run-android

# 4. Push source to the git
C:\react-native-maps-demo> git add -A
C:\react-native-maps-demo> git commit -m "Added the boilerplate project modules."
C:\react-native-maps-demo> git Push

# 5. Pull the source code in different machine and start modifying the project
C:\> git clone https://pamboo80@bitbucket.org/pamboo80/react-native-maps-demo.git