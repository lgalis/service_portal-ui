import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextContent, TextVariants } from '@patternfly/react-core';
import { DateFormat } from '@redhat-cloud-services/frontend-components/components/cjs/DateFormat';
import { useIntl } from 'react-intl';

const messages = {
  platform: {
    id: 'portfolio.item.detail.info.platform',
    defaultMessage: 'Platform'
  },
  portfolio: {
    id: 'portfolio.item.detail.info.portfolio',
    defaultMessage: 'Portfolio'
  },
  vendor: {
    id: 'portfolio.item.detail.info.vendor',
    defaultMessage: 'Vendor'
  },
  created: {
    id: 'portfolio.item.detail.info.created',
    defaultMessage: 'Created'
  }
};

const ItemDetailInfoBar = ({ product, source, portfolio }) => {
  const { formatMessage } = useIntl();
  return (
    <TextContent className="pf-u-mb-md">
      <Text className="font-14">{formatMessage(messages.platform)}</Text>
      <Text
        id="source-name"
        className="overflow-wrap"
        component={TextVariants.p}
      >
        {source.name}
      </Text>
      <Text className="font-14">{formatMessage(messages.portfolio)}</Text>
      <Text
        id="portfolio-name"
        className="overflow-wrap"
        component={TextVariants.p}
      >
        {portfolio.name}
      </Text>
      {product.distributor && (
        <span id="distributor">
          <Text className="font-14">{formatMessage(messages.vendor)}</Text>
          <Text className="overflow-wrap" component={TextVariants.p}>
            {product.distributor}
          </Text>
        </span>
      )}
      <Text className="font-14">{formatMessage(messages.created)}</Text>
      <Text id="created_at" component={TextVariants.p}>
        <DateFormat variant="relative" date={product.created_at} />
      </Text>
    </TextContent>
  );
};

ItemDetailInfoBar.propTypes = {
  product: PropTypes.shape({
    distributor: PropTypes.string,
    updated_at: PropTypes.string,
    created_at: PropTypes.string.isRequired
  }).isRequired,
  source: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  portfolio: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default ItemDetailInfoBar;
