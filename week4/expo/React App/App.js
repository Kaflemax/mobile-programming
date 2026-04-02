import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default function ShooterGame() {
  const [playerX, setPlayerX] = useState(140);
  const [bullets, setBullets] = useState([]);
  const [enemies, setEnemies] = useState([{ x: 100, y: 0 }]);
  const [score, setScore] = useState(0);
  // Move bullets
  useEffect(() => {
    const interval = setInterval(() => {
      setBullets((prev) =>
        prev
          .map((b) => ({ ...b, y: b.y - 10 }))
          .filter((b) => b.y > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Move enemies
  useEffect(() => {
    const interval = setInterval(() => {
      setEnemies((prev) =>
        prev
          .map((e) => ({ ...e, y: e.y + 5 }))
          .filter((e) => e.y < 300)
      );

      // Spawn new enemy
      setEnemies((prev) => [
        ...prev,
        { x: Math.random() * 280, y: 0 },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Collision detection
  useEffect(() => {
    setEnemies((prevEnemies) => {
      let newEnemies = [...prevEnemies];

      bullets.forEach((b) => {
        newEnemies = newEnemies.filter((e) => {
          const hit = Math.abs(b.x - e.x) < 20 && Math.abs(b.y - e.y) < 20;
          if (hit) setScore((s) => s + 1);
          return !hit;
        });
      });

      return newEnemies;
    });
  }, [bullets]);

  const moveLeft = () => setPlayerX((p) => Math.max(p - 20, 0));
  const moveRight = () => setPlayerX((p) => Math.min(p + 20, 280));

  const shoot = () => {
    setBullets((prev) => [...prev, { x: playerX + 10, y: 260 }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>

      <View style={styles.gameArea}>
        {/* Player */}
        <View style={[styles.player, { left: playerX }]} />

        {/* Bullets */}
        {bullets.map((b, i) => (
          <View key={i} style={[styles.bullet, { left: b.x, top: b.y }]} />
        ))}

        {/* Enemies */}
        {enemies.map((e, i) => (
          <View key={i} style={[styles.enemy, { left: e.x, top: e.y }]} />
        ))}
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={moveLeft}>
          <Text>⬅️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={shoot}>
          <Text>🔫 Shoot</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={moveRight}>
          <Text>➡️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020617",
  },
  score: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
  },
  gameArea: {
    width: 320,
    height: 300,
    backgroundColor: "#0f172a",
    overflow: "hidden",
    borderRadius: 10,
    position: "relative",
  },
  player: {
    position: "absolute",
    bottom: 10,
    width: 30,
    height: 30,
    backgroundColor: "cyan",
  },
  bullet: {
    position: "absolute",
    width: 6,
    height: 12,
    backgroundColor: "yellow",
  },
  enemy: {
    position: "absolute",
    width: 25,
    height: 25,
    backgroundColor: "red",
  },
  controls: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#e2e8f0",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});