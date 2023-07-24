import { faTransgenderAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TransgenderAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TransgenderAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTransgenderAlt} {...props} />;
};

export default TransgenderAlt;
