#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 1) uniform sampler2D texSampler;

layout(location = 0) in vec3 fragNormal;
layout(location = 1) in vec2 fragTexCoord;

layout(location = 0) out vec4 outColor;

vec3 light = vec3(0.7071, 0.7071, 0.7071);

void main() {
    float diff = max(dot(fragNormal, light), 0.1);
    outColor = texture(texSampler, fragTexCoord)*diff;
}