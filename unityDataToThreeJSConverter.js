const degToRad = Math.PI / 180;
const xAxis = new THREE.Vector3(1, 0, 0);
const yAxis = new THREE.Vector3(0, 1, 0);
const zAxis = new THREE.Vector3(0, 0, 1);

function rotateAroundWorldAxis(object, axis, radians) {
	rotWorldMatrix = new THREE.Matrix4();
	rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
	rotWorldMatrix.multiply(object.matrix);
	tobject.matrix = rotWorldMatrix;
	tobject.rotation.setFromRotationMatrix(object.matrix);
}

function convertUnityAngle(unityAngle){
	return unityAngle * degToRad;
}
		                                               
function convertUnityRotation(rotationEuler){
	convertedX = -convertUnityAngle(rotationEuler.x);
	convertedY = -convertUnityAngle(rotationEuler.y);
	convertedZ = convertUnityAngle(rotationEuler.z);

	return new THREE.Vector3(convertedX, convertedY, convertedZ);
}

function setLightDirection(directionLight, rotationEuler){
	directionLight.position.x = Math.cos(rotationEuler.x);
	directionLight.position.y = Math.cos(rotationEuler.y);
	directionLight.position.z = Math.cos(rotationEuler.z);
}

function convertUnityPosition(position){
	var convertedPosition = new THREE.Vector3(position.x, position.y, -position.z);

	return convertedPosition;
}
