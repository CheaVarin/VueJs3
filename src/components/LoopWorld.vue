<template>
  <div>
    <table border="2">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "LoopWorld",
  data() {
    return {
      users: [
        { id: 1, name: "peter", email: "peter@gmail.com" },
        { id: 2, name: "varin", email: "varin@gmail.com" },
        { id: 3, name: "vinra", email: "vinra@gmail.com" },
        { id: 4, name: "ravin", email: "ravin@gmail.com" },
      ],
    };
  },
};
</script>