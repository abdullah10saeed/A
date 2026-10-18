'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import KpiCard from '../components/KpiCard';
import OrdersTable from '../components/OrdersTable';
import TopSelling from '../components/TopSelling';
import WeekChart from '../components/WeekChart';
import { initialOrders, demoClients, demoItems, pick } from '../components/data';

export default function Page() {
  const [nav, setNav] = useState('dash');
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [sales, setSales] = useState(3450);
  const [orderCount, setOrderCount] = useState(128);
  const [nextId, setNextId] = useState(1030);

  const addOrder = () => {
    const total = 30 + Math.floor(Math.random() * 70);
    setOrders((prev) => [{
      id: `#${nextId}`,
      who: pick(demoClients),
      items: pick(demoItems),
      total,
      st: 'progress',
    }, ...prev]);
    setNextId((n) => n + 1);
    setSales((s) => s + total);
    setOrderCount((c) => c + 1);
  };

  const activeCount = orders.filter((o) => o.st === 'progress').length;
  const q = query.trim();
  const visible = orders.filter((o) =>
    (filter === 'all' || o.st === filter) &&
    (o.who + o.items + o.id).includes(q)
  );

  return (
    <div className="dash">
      <Sidebar active={nav} onNav={setNav} />
      <div className="main">
        <Header query={query} onQuery={setQuery} onAdd={addOrder} />

        <div className="kpis">
          <KpiCard label="مبيعات اليوم" value={`${sales.toLocaleString('en-US')} ر.س`} sub="↗ 12% عن أمس" tone="pos" />
          <KpiCard label="طلبات اليوم" value={orderCount.toLocaleString('en-US')} sub="آخر طلب قبل دقيقتين" tone="acc" />
          <KpiCard label="قيد التحضير" value={activeCount} sub="في المطبخ الآن" tone="warn" />
          <KpiCard label="متوسط التحضير" value="18 د" sub="أسرع بـ 2 د من المعدل" tone="pos" />
        </div>

        <div className="content">
          <OrdersTable orders={visible} filter={filter} onFilter={setFilter} />
          <aside className="right">
            <TopSelling />
            <WeekChart />
          </aside>
        </div>
      </div>
    </div>
  );
}
