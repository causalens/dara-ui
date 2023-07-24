import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CompactDisc icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CompactDisc = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCompactDisc} {...props} />;
};

export default CompactDisc;
