# Dishboard Maritime 🛰️

**선박별 Starlink/위성인터넷 연결 상태를 한 화면에서 확인하는 해상 통신 운영 대시보드.**

Dishboard Maritime은 어선, 해운 선박, 양식장 관리선, 항만 지원선처럼 지상망이 약하거나 끊기는 해상 운영 환경에서 Starlink/위성인터넷 상태를 통합 모니터링하는 데모 제품입니다.

## Why Dishboard Maritime?

해상에서는 통신 장애가 단순 불편이 아니라 운항, 고객 응대, 선원 안전, 원격 장비 운영, 보고 체계에 직접 영향을 줍니다.

Dishboard는 여러 선박의 연결 상태, 지연시간, 신호 품질, 장애 발생, 복구 이력을 한 화면에서 보여줍니다.

## Core Use Case

> 선박별 Starlink 연결 상태, 지연시간, 장애 이력, 복구 상태를 한 화면에서 확인하세요.

## Features

- 선박별 온라인 / 신호 저하 / 오프라인 상태
- 다운로드 / 업로드 / 지연시간 모니터링
- 24시간 신호 품질 트렌드
- 장애물 / 설치 각도 점검 메모
- 장애 발생 및 자동 복구 알림
- 해운사 / 어선 fleet / 설치 관리 업체용 통합 관제 화면

## Local Development

```bash
npm install
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to vercel.com → Add New Project
3. Select this repo → Deploy

## Tech Stack

- React 18 + Recharts + Lucide React
- IBM Plex Mono + Syne fonts

## Roadmap

- [ ] 실제 Starlink/위성인터넷 telemetry 연동
- [ ] 선박별 장애 이력 저장
- [ ] SMS / Kakao / email 알림
- [ ] 월간 통신 품질 리포트 PDF
- [ ] 설치/관리 업체용 다중 고객 계정

---

Built with Claude + GPT
