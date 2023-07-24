import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FeatherPointed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FeatherPointed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFeatherPointed} {...props} />;
};

export default FeatherPointed;
